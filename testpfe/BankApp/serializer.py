from rest_framework import serializers
from BankApp.models import Bank, Accountes, Transaction, Customer

class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bank
        fields = (
            'BankId',
            'BankName' 
        )

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = (
            'CustomerId',
            'CustomerName' 
        )

class AccountesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accountes
        fields = (
            'AccounteId',
            'BankName',
            'AccounteBalance',
            'Wording'
        )


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = (
            'TransactionId',
            'TransacDate',
            'Accounte',
            'Descriptive',
            'TransactionAmount',
            'TransactionType'

        )