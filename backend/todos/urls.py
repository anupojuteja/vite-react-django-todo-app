from django.urls import path
from .views import get_or_add_tasks

urlpatterns = [
    path('tasks/', get_or_add_tasks),
]
