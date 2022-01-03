-- MySQL Script generated by MySQL Workbench
-- Wed Jan  9 23:02:30 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema logs
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pythonarc
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pythonarc` ;

-- -----------------------------------------------------
-- Schema pythonarc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pythonarc` DEFAULT CHARACTER SET utf8 ;
USE `pythonarc` ;

-- -----------------------------------------------------
-- Table `pythonarc`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pythonarc`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `reset` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `pythonarc`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `pythonarc`;
INSERT INTO `pythonarc`.`users` (`id`, `name`, `email`, `password`, `reset`) VALUES (1, 'Uniceub', 'uniceub@gmail.com', '123456', NULL);

COMMIT;
