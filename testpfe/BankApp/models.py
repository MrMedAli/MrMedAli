from django.db import models

# Create your models here.

class Customer(models.Model):
    CustomerId = models.AutoField(primary_key=True)
    CustomerName = models.CharField(max_length=100)
    
class Bank(models.Model):
    BankId = models.AutoField(primary_key=True)
    BankName = models.CharField(max_length=100)
    
class Accountes(models.Model):
    AccounteId = models.AutoField(primary_key=True)
    BankName = models.CharField(max_length=100)
    AccounteBalance = models.IntegerField()
    Wording = models.CharField(max_length=100)
    
class Transaction(models.Model):
    TRANSACTION_TYPE = (
        ('D', 'débité'),
        ('C', 'crédité')
    )
    TransactionId = models.AutoField(primary_key=True)
    TransacDate = models.DateField()
    Accounte = models.ForeignKey(Accountes, on_delete=models.CASCADE)
    Descriptive = models.CharField(max_length=200)
    TransactionAmount = models.IntegerField()
    TransactionType = models.CharField(max_length=1, choices=TRANSACTION_TYPE)
    




