-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema book_gallery
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema book_gallery
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS book_gallery DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE book_gallery ;


-- -----------------------------------------------------
-- Table book_gallery.users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `book_gallery`.`users` (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(225) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- Table book_gallery.books
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `book_gallery`.`books` (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  publication_date DATE NULL DEFAULT NULL,
  language VARCHAR(255) NULL DEFAULT NULL,
  number_pages INT NOT NULL,
  price VARCHAR(255) NULL DEFAULT NULL,
  cover_image VARCHAR(255) NULL DEFAULT NULL,
  users_id INT NOT NULL,

  PRIMARY KEY (id, users_id),
  INDEX fk_books_users_idx (users_id ASC) VISIBLE,

  CONSTRAINT fk_books_users
    FOREIGN KEY (users_id)
    REFERENCES book_gallery.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -- -----------------------------------------------------
-- -- Schema mydb
-- -- -----------------------------------------------------
-- -- -----------------------------------------------------
-- -- Schema book_gallery
-- -- -----------------------------------------------------

-- -- -----------------------------------------------------
-- -- Schema book_gallery
-- -- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `book_gallery` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- USE `book_gallery` ;

-- -- -----------------------------------------------------
-- -- Table `book_gallery`.`admin`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `book_gallery`.`admin` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(255) NOT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;


-- -- -----------------------------------------------------
-- -- Table `book_gallery`.`users`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `book_gallery`.`users` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(255) NOT NULL,
--   `email` VARCHAR(225) NOT NULL,
--   `password` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;


-- -- -----------------------------------------------------
-- -- Table `book_gallery`.`books`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `book_gallery`.`books` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `title` VARCHAR(255) NOT NULL,
--   `author` VARCHAR(255) NOT NULL,
--   `genre` VARCHAR(255) NOT NULL,
--   `description` TEXT NOT NULL,
--   `publication_date` DATE NULL DEFAULT NULL,
--   `language` VARCHAR(255) NULL DEFAULT NULL,
--   `number_pages` INT NOT NULL,
--   `price` VARCHAR(255) NULL DEFAULT NULL,
--   `cover_image` VARCHAR(255) NULL DEFAULT NULL,
--   `users_id` INT NOT NULL,
--   `admin_id` INT NOT NULL,
--   PRIMARY KEY (`id`, `users_id`, `admin_id`),
--   INDEX `fk_books_users_idx` (`users_id` ASC) VISIBLE,
--   INDEX `fk_books_admin1_idx` (`admin_id` ASC) VISIBLE,
--   CONSTRAINT `fk_books_users`
--     FOREIGN KEY (`users_id`)
--     REFERENCES `book_gallery`.`users` (`id`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_books_admin1`
--     FOREIGN KEY (`admin_id`)
--     REFERENCES `book_gallery`.`admin` (`id`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;


-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
