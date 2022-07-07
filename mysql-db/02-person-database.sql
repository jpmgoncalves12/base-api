CREATE TABLE `users` (
  `id` varchar(26) NOT NULL UNIQUE,
  `name` varchar(64) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE,
  `password` varchar(64) NOT NULL,
  PRIMARY KEY (`id`) UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Password: Test1234
INSERT INTO
  base_api.users (id, name, email, password)
VALUES
  (
    '01G75V6RSB2796MJ1A1RJ0KWG4',
    'Jhonny Deep',
    'teste@email.com',
    '31df522655f791eb3ee96379e020a797672236b7fa298d1413d904e1d762ba2a'
  );