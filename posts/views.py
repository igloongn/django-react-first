from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Local
from . import serializers as s
from . import models as m


@api_view(['GET', 'POST'])
def post_list(request):
    if request.method == 'GET':
        queryset = m.Post.objects.all()
        ser_class = s.PostSerializers(queryset, many=True)
        return Response(ser_class.data)
    if request.method == 'POST':
        queryset = m.Post.objects.all()
        ser_class = s.PostSerializers(data = queryset)
        if ser_class.is_valid():
            return Response(ser_class.data, status.HTTP_201_CREATED)
        return Response(ser_class.errors, status.HTTP_400_BAD_REQUEST)



