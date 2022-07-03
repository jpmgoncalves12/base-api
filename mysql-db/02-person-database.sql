CREATE TABLE `base-api`.person (
	id varchar(26) NOT NULL UNIQUE,
	name varchar(64) NOT NULL,
	born DATE NULL,
	cpf varchar(11) NULL UNIQUE,
	gender VARCHAR(16) NOT NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX person_id_IDX USING HASH ON `base-api`.person (id);
CREATE UNIQUE INDEX person_cpf_IDX USING BTREE ON `base-api`.person (cpf);
