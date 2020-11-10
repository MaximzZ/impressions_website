from django.shortcuts import render

def map(request):
    return render(request, 'place_location.location.html')
