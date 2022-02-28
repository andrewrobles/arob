from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth.models import User

@api_view(['GET'])
def helloworld(request):
    return Response({'message': 'Hello World!'})

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        print('calling post function')
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.is_valid(raise_exception=True)
        print('user: {}'.format(user))
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            token: token.key
        })