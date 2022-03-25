from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Order, OrderedItem, Item, Ingredient, Extra

@api_view(['POST', 'GET', 'DELETE'])
def order(request):
    order = Order.singleton()
    if request.method == 'POST':
        for requested_item in request.data:
            item = Item.objects.get(id=requested_item['id'])
            order_item = OrderedItem.objects.create(item=item)
            if 'extras' in requested_item:
                for extra in requested_item['extras']:
                    order_item.extras.add(extra['id'])
            order.ordered_items.add(order_item)
    elif request.method == 'DELETE':
        for ordered_item in order.ordered_items.all():
            order.ordered_items.remove(ordered_item)
    return Response(order.get_items())

@api_view(['GET'])
def menu(request):
    return Response([
        {'name': item.name, 'ingredients': 
            [ingredient.name for ingredient in item.ingredients.all()]
        } 
        for item in Item.objects.all()
    ])