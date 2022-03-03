from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth.models import User

@api_view(['GET'])
def helloworld(request):
    return Response({'message': 'Hello World!'})

@api_view(['POST'])
def sign_up(request):
    user = User.objects.create_user(
        username=request.data['username'], password=request.data['password'])
    return Response()

@api_view(['GET'])
def logout(request):
    print(request.user)
    # request.user.auth_token.delete()
    return Response({'token': None})