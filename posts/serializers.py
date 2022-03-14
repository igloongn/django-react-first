from rest_framework import serializers
from . import models as m

class PostSerializers(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    created = serializers.SerializerMethodField()
    updated = serializers.SerializerMethodField()
    class Meta:
        model = m.Post
        fields = ['id', 'author', 'title', 'desc', 'created', 'updated' ]
        # fields = ('__all__')
    def get_author(self, obj):
        # print(self)
        # print(obj)
        return(obj.author.username)

    def get_created(self, obj):
        # print('This is the Time:::',obj.created.strftime("%m-%d-%Y, %H:%M:%S"))
        return obj.created.strftime("%m-%d-%Y, %H:%M:%S")
        
    def get_updated(self, obj):
        # print('This is the Time:::',obj.created.strftime("%m-%d-%Y, %H:%M:%S"))
        return obj.updated.strftime("%m-%d-%Y, %H:%M:%S")
        
        

