from time import sleep

print('=-=' * 20)
nome = input("Qual é seu nome:");
salario = float(input("Seu Salario:"));
opção = 0
while opção != 5:
    print('=-=' * 20)
    print('''
                    MENU
	[1] Calcular contribuição mensal INSS
	[2] Inserir novos dados
	[3] Sair do programa
	''')
    print('=-=' * 20)
    print("")

    opção = int(input('>>>> Qual é sua opção? '))
    print("")
    print('=-=' * 20)
    print("")

    if opção == 1:
        if salario <= 1045:
            print('Olá', nome, 'sua contribuição para o INSS será de R$', salario * (7.5 / 100))
        elif (salario >= 1045.01) and (salario <= 2089.60):
            print('Olá', nome, 'sua contribuição para o INSS será de R$', salario * (9 / 100))
        elif (salario >= 2089.61) and (salario <= 3134.40):
            print('Olá', nome, 'sua contribuição para o INSS será de R$', salario * (12 / 100))
        elif (salario >= 3134.41) and (salario <= 6101.06):
            print('Olá', nome, 'sua contribuição para o INSS será de R$', salario * (14 / 100))

    elif opção == 2:
        nome = input("Qual é seu nome:");
        salario = float(input("Seu Salario:"));

    elif opção == 3:
        print('Finalizando...')

    else:
        print('Opção inválida. Tente novamente.')
    print("")
    print('=-=' * 20)
    sleep(3)
print('Fim do programa! Volte sempre!')
