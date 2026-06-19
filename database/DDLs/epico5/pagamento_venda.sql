CREATE TABLE pagamento_venda (
    venda_id INT NOT NULL REFERENCES venda(id) ON DELETE CASCADE,
    forma_pagamento_id INT NOT NULL REFERENCES forma_pagamento(id),
    valor_pago DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (venda_id, forma_pagamento_id)
);