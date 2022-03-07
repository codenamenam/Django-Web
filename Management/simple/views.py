from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def sub(request):
    return render(request, "sub.html")