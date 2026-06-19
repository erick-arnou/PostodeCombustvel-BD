
CREATE TABLE venda (
    id SERIAL PRIMARY KEY,
    funcionario_id INT NOT NULL,
    caixa_turno_id INT NOT NULL,
    cliente_id INT,              
    veiculo_id INT,              
    data_hora TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL
		DEFAULT 'aberto'
		CHECK (status IN ('aberto', 'finalizado', 'cancelado')),
    CONSTRAINT fk_venda_funcionario FOREIGN KEY (funcionario_id) REFERENCES funcionario(id),
    CONSTRAINT fk_venda_caixa_turno FOREIGN KEY (caixa_turno_id) REFERENCES caixa_turno(id),
    CONSTRAINT fk_venda_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    CONSTRAINT fk_venda_veiculo FOREIGN KEY (veiculo_id) REFERENCES veiculo(id)
);