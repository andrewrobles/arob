from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Item

@api_view(['GET'])
def menu(request):
    return Response([
        {
            'name': item.name,
            'description': item.description
        } 
        for item in Item.objects.all()
    ])