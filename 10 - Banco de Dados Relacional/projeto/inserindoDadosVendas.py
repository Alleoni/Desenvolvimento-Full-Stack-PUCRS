import vendas as vd
import sqlalchemy.orm as orm
import sqlalchemy as sa
import pandas as pd

endereco = "C:\\Users\\guilhe\\"

vendedor = pd.read.csv(endereco + "vendedor.csv", sep=";")

tbVendedor = pd.DataFrame(vendedor)


engine = sa.create_engine("sqlite:///BD//vendas.db")

sessao = orm.sessionmaker(bind=engine)
sessao = sessao()


for i in range(len(tbVendedor)):
    dados_vendedor = vd.vendedor(
        registro_vendedor=int(tbVendedor['registro.vendedor'][i]),
        cpf=(tbVendedor['cpf'][i]),
        nome=(tbVendedor['nome'][i]),
        genero=(tbVendedor['genero'][i]),
        email=(tbVendedor['email'][i]),
    )

    try:
        sessao.add(dados_vendedor)
        sessao.commit()
    except ValueError:
        ValueError()

print("Dados Inseridos na tbVendedor")
