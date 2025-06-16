from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

todos = [
    {"id": 1, "title": "Learn React"},
    {"id": 2, "title": "Build Django App"},
]

@csrf_exempt
def get_or_add_tasks(request):
    if request.method == 'GET':
        return JsonResponse(todos, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        new_task = {
            "id": len(todos) + 1,
            "title": data.get("title", "")
        }
        todos.append(new_task)
        return JsonResponse(new_task, status=201)
