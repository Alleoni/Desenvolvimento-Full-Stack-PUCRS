import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///BD//ocorrencia.db")

base = orm.declarative_base()

# Tabela cliente


class DP(base):
    __tablename__ = "tbDP"

    codDP = sa.Column(sa.INTEGER, primary_key=True, index=True)
    nome = sa.Column(sa.VARCHAR(100), nullable=False)
    endereco = sa.Column(sa.VARCHAR(255))


class ResponsavelDP(base):
    __tablename__ = "tbResponsavelDP"

    codDP = sa.Column(sa.INTEGER, primary_key=True, index=True)
    delegado = sa.Column(sa.VARCHAR(100), nullable=False)


class Municipio(base):
    __tablename__ = "tbMunicipio"

    codIBGE = sa.Column(sa.INTEGER, primary_key=True, index=True)
    municipio = sa.Column(sa.VARCHAR(100), nullable=False)
    regiao = sa.Column(sa.VARCHAR(25), nullable=False)


# registro_fornecedor = sa.Column(sa.INTEGER, sa.ForeignKey(
    #    "fornecedor.registro_fornecedor", ondelete="NO ACTION", onupdate="CASCADE"), index=True)


class Ocorrencias(base):
    __tablename__ = "tbOcorrencias"

    idRegistro = sa.Column(sa.INTEGER, primary_key=True, index=True)
    codDP = sa.Column(sa.INTEGER, sa.ForeignKey(
        "tbDP.codDP", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    codIBGE = sa.Column(sa.INTEGER, sa.ForeignKey(
        "tbMunicipio.codIBGE", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    ano = sa.Column(sa.CHAR(4), nullable=False)
    mes = sa.Column(sa.VARCHAR(2), nullable=False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable=False)
    qtde = sa.Column(sa.INTEGER, nullable=False)


try:
    base.metadata.create_all(engine)  # Criar as tabelas
    print("Tabelas criadas")
except ValueError:
    ValueError()
