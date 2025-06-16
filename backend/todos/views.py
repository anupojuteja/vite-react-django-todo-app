from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Todo

def todo_list(request):
    todos = Todo.objects.all().values()
    return JsonResponse(list(todos), safe=False)
