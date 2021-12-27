from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from BankApp.models import Bank, Accountes, Transaction, Customer
from BankApp.serializer import BankSerializer, AccountesSerializer, TransactionSerializer, CustomerSerializer
from django.core.files.storage import default_storage

# Create your views here.


@csrf_exempt
def bankApi(request,id=0):
    if request.method=='GET':
        bank = Bank.objects.all()
        bank_serilizer = BankSerializer(bank, many=True)
        return JsonResponse(bank_serilizer.data, safe=False)
    elif request.method=='POST':
        bank_data = JSONParser().parse(request)
        bank_serilizer = BankSerializer(data=bank_data)
        if bank_serilizer.is_valid():
            bank_serilizer.save()
            return JsonResponse("Ajouté avec succés!!", safe=False)
        return JsonResponse("Ajout raté :(", safe=False)
    elif request.method=='PUT':
        bank_data = JSONParser().parse(request)
        bank = Bank.objects.get(BankId=bank_data['BankId'])
        bank_serilizer = BankSerializer(bank,data=bank_data)
        if bank_serilizer.is_valid():
            bank_serilizer.save()
            return JsonResponse("Update avec succés!!", safe=False)
        return JsonResponse("Update raté :(", safe=False)
    elif request.method=='DELETE':   
        bank = Bank.objects.get(BankId=id)
        bank.delete()
        return JsonResponse("Suprimé avec succés!! ", safe=False)

@csrf_exempt
def CustomerApi(request,id=0):
    if request.method=='GET':
        customer = Customer.objects.all()
        customer_serilizer = CustomerSerializer(customer, many=True)
        return JsonResponse(customer_serilizer.data, safe=False)
    elif request.method=='POST':
        customer_data = JSONParser().parse(request)
        customer_serilizer = CustomerSerializer(data=customer_data)
        if customer_serilizer.is_valid():
            customer_serilizer.save()
            return JsonResponse("Ajouté avec succés!!", safe=False)
        return JsonResponse("Ajout raté :(", safe=False)
    elif request.method=='PUT':
        customer_data = JSONParser().parse(request)
        customer = Customer.objects.get(CustomerId=customer_data['CustomerId'])
        customer_serilizer = CustomerSerializer(customer,data=customer_data)
        if customer_serilizer.is_valid():
            customer_serilizer.save()
            return JsonResponse("Update avec succés!!", safe=False)
        return JsonResponse("Update raté :(", safe=False)
    elif request.method=='DELETE':   
        customer = Customer.objects.get(CustomerId=id)
        customer.delete()
        return JsonResponse("Suprimé avec succés!! ", safe=False)


@csrf_exempt
def accounteApi(request,id=0):
    if request.method=='GET':
        accounte= Accountes.objects.all()
        accounte_serilizer = AccountesSerializer(accounte, many=True)
        return JsonResponse(accounte_serilizer.data, safe=False)
    elif request.method=='POST':
        accounte_data = JSONParser().parse(request)
        accounte_serilizer = AccountesSerializer(data=accounte_data)
        if accounte_serilizer.is_valid():
            accounte_serilizer.save()
            return JsonResponse("Ajouté avec succés!!", safe=False)
        return JsonResponse("Ajout raté :(", safe=False)
    elif request.method=='PUT':
        accounte_data = JSONParser().parse(request)
        accounte= Accountes.objects.get(AccounteId=id)
        accounte_serilizer = AccountesSerializer(accounte,data=accounte_data)
        if accounte_serilizer.is_valid():
            accounte_serilizer.save()
            return JsonResponse("Update avec succés!!", safe=False)
        return JsonResponse("Update raté :(", safe=False)
    elif request.method=='DELETE':   
        accounte= Accountes.objects.get(AccounteId=id)
        accounte.delete()
        return JsonResponse("Suprimé avec succés!! ", safe=False)


        
@csrf_exempt
def transactionApi(request,id=0):
    if request.method=='GET':
        transaction= Transaction.objects.all()
        transaction_serilizer = TransactionSerializer(transaction, many=True)
        return JsonResponse(transaction_serilizer.data, safe=False)
    elif request.method=='POST':
        Transaction_data = JSONParser().parse(request)
        transaction_serilizer = TransactionSerializer(data=Transaction_data)
        if transaction_serilizer.is_valid():
            transaction_serilizer.save()
            return JsonResponse("Ajouté avec succés!!", safe=False)
        return JsonResponse("Ajout raté :(", safe=False)
    elif request.method=='PUT':
        Transaction_data = JSONParser().parse(request)
        transaction= Transaction.objects.get(TransactionId=Transaction_data['TransactionId'])
        transaction_serilizer = TransactionSerializer(transaction,data=Transaction_data)
        if transaction_serilizer.is_valid():
            transaction_serilizer.save()
            return JsonResponse("Update avec succés!!", safe=False)
        return JsonResponse("Update raté :(", safe=False)
    elif request.method=='DELETE':   
        transaction= Transaction.objects.get(TransactionId=id)
        transaction.delete()
        return JsonResponse("Suprimé avec succés!! ", safe=False)