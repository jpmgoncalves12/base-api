CREATE TABLE `persons` (
  `id` varchar(26) NOT NULL,
  `name` varchar(64) NOT NULL,
  `born` date DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `gender` varchar(16) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `person_cpf_IDX` (`cpf`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
