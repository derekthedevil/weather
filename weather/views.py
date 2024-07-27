from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def details(request,lat,lon):
    return render(request, 'details.html',{'lat':lat,'lon':lon})