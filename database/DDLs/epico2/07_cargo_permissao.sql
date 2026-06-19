CREATE TABLE cargo_permissao (
    id_c_perm INT NOT NULL,
    id_cargo INT NOT NULL,
    id_perm INT NOT NULL,
    CONSTRAINT pk_cargo_permissao PRIMARY KEY (id_c_perm),
    CONSTRAINT fk_cp_cargo     FOREIGN KEY (id_cargo) REFERENCES cargos (id_cargo),
    CONSTRAINT fk_cp_permissao FOREIGN KEY (id_perm)  REFERENCES permissao (id_perm)
);
