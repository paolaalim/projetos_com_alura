import os

restaurantes = [
    {'nome': 'Sushi do Japa','categoria': 'Japonesa', 'ativo': True},
    {'nome': 'Dogão do Beto','categoria': 'De rua', 'ativo': True}, 
    {'nome': 'Crepe Francês','categoria': 'Francesa','ativo': False}, 
    {'nome': 'Manollos Pizzeria','categoria': 'Italiano','ativo': False},
    {'nome': 'Pizza Superma', 'categoria': 'Pizza', 'ativo': True},
    {'nome': 'Cantina', 'categoria': 'Italiano', 'ativo': False}
]

def exibir_nome_app():
    '''Exibe na tela o nome/título estilizado do aplicativo'''

    print('═════════════════════════')
    print('Ｓａｂｏｒ Ｅｘｐｒｅｓｓ\n')

def exibir_opcoes():
    '''Exibe uma lista de opções de interação do aplicativo'''

    print('1. Cadastrar restaurante')
    print('2. Listar restaurantes')
    print('3. Alterar estado do restaurante')
    print('4. Sair\n')

def exibir_subtitulo(texto):
    '''Limpa a tela e exibe um subtitulo estilizado
    
    Inputs:
    - texto: str - O texto do subtítulo
    '''

    os.system('cls')
    linha_divisoria = '═' * len(texto)
    print(linha_divisoria)
    print(texto)
    print(linha_divisoria)
    print()

def finalizar_app():
    ''' Exibe mensagem de finalização do aplicativo '''

    exibir_subtitulo('Finalizando app')

def voltar_ao_menu_principal():
    ''' Solicita uma tecla para voltar ao menu principal 
    
    Outputs:
    - Retorna ao menu principal
    '''
    input('\nDigite qualquer tecla para voltar ao menu principal')
    main()

def opcao_invalida():
    ''' Lima a tela, exibe mensagem de opção inválida e retorna ao menu principal 
    
    Outputs:
    - Retorna ao menu principal
    '''
    os.system ('cls')
    print('Opção inválida')
    voltar_ao_menu_principal()


def cadastrar_novo_restaurante():
    '''Cadastra um novo restaurante

    Inputs:
    - Nome do restaurante
    - Categoria

    Output:
    - Adiciona um novo restaurante à lista de restaurantes

    '''

    exibir_subtitulo('Cadastro de novos restaurantes')

    nome_do_restaurante = input('Digite o nome do restaurante que deseja cadastrar: ')
    categoria = input(f'Digite o nome da categoria do restaurante {nome_do_restaurante}: ')
    dados_do_restaurante = {'nome':nome_do_restaurante, 'categoria':categoria, 'ativo':False}
    restaurantes.append(dados_do_restaurante)
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!')

    voltar_ao_menu_principal()


def listar_restaurantes():
    '''Exibe uma lista dos restaurantes que estão na lista e os que foram 
    implementados durante uma execução
    
    Outputs:
    - Exibe a lista de restaurantes na tela
    '''

    exibir_subtitulo('Lista de restaurantes')

    print(f'{'Nome do restaurante'.ljust(23)} | {'Nome do restaurante'.ljust(22)} | Status')

    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = '‣ Ativado' if restaurante['ativo'] else '⁃ Desativado'
        print(f' • {nome_restaurante.ljust(20)} | ◦ {categoria.ljust(20)} | {ativo}')

    voltar_ao_menu_principal()


def alternar_estado_restaurante():
    ''' Altera o estado ativo/desativado de um restaurante

    Input:
    - Nome do restaurante

    Output:
    - Exibe mensagem indicando o sucesso da operação


    '''

    exibir_subtitulo('Alternando estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False
    
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            
            print(mensagem)
    
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado.')

    voltar_ao_menu_principal()


def escolher_opcoes():    
    ''' Solicita e executa a opção escolhida pelo usuário 
    
    Outputs:
    - Executa a opção escolhida pelo usuário
    '''

    try:
        opcao_escolhida = int(input('Escolha uma opção: '))
        print('-------------------------')

        match opcao_escolhida:
            case 1:
                cadastrar_novo_restaurante() 
            case 2:
                listar_restaurantes()
            case 3:
                alternar_estado_restaurante()
            case 4:
                finalizar_app()
            case _:
                opcao_invalida()
    except:
        opcao_invalida()


def main():
    '''Função principal que inicia o aplicativo'''

    os.system('cls')
    exibir_nome_app()
    exibir_opcoes()
    escolher_opcoes()

if __name__ == '__main__':
    main()