from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def SubPage1(request):
    return render(request, "page1.html")

def SubPage2(request):
    return render(request, "page2.html")