from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Item, Ingredient

@api_view(['GET'])
def menu(request):
    return Response([
        {'name': item.name, 'ingredients': 
            [ingredient.name for ingredient in item.ingredients.all()]
        } 
        for item in Item.objects.all()
    ])