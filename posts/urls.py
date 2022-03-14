from django.urls import path, re_path
from . import views as v


urlpatterns = [
    path('posts/', v.post_list, name='post_list'),
]