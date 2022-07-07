CREATE TABLE `users` (
  `id` varchar(26) NOT NULL UNIQUE,
  `name` varchar(64) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE,
  `password` varchar(64) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
