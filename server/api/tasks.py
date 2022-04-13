from api.models import AuthCode

def generate_auth_code():
    if AuthCode.objects.count() == 0:
        return AuthCode.objects.create(value='1').value
    auth_code = AuthCode.objects.first()
    auth_code.value = str(int(auth_code.value) + 1)
    auth_code.save()
    return auth_code.value