CREATE TABLE pagamento (
    id_pagamento INT NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    CONSTRAINT pk_pagamento PRIMARY KEY (id_pagamento)
);
