import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///BD/vendas.db")

base = orm.declarative_base()

#Tabela cliente
class cliente(base):
    __tablename__ =  "cliente"

    cpf = sa.Column(sa.CHAR(14),primary_key = True, index = True)
    nome = sa.Column(sa.varCHAR(100), nullable = False)
    email = sa.Column(sa.varCHAR(50), nullable = False)
    genero = sa.Column(sa.CHAR(1))
    salario = sa.Column(sa.DECIMAL(10,2))
    dia_mes_aniversario = sa.Column(sa.CHAR(5))
    bairro = sa.Column(sa.VARCHAR(50))
    cidade = sa.Column(sa.VARCHAR(50))
    uf = sa.Column(sa.CHAR(2))
