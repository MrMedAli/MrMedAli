from django.urls import re_path, path
from BankApp import views


urlpatterns=[
    path('accoute/',views.accounteApi),
    re_path(r'^bank/$',views.bankApi),
    re_path(r'^bank/([0-9]+)$',views.bankApi),

    re_path(r'^customer/$',views.CustomerApi),
    re_path(r'^customer/([0-9]+)$',views.CustomerApi),

    re_path(r'^accounte/$',views.accounteApi),
    re_path(r'^accounte/([0-9]+)$',views.accounteApi),
    
    

    re_path(r'^transaction/$',views.transactionApi),
    re_path(r'^transaction/([0-9]+)$',views.transactionApi),
]