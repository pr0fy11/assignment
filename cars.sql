-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2023 at 01:43 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `manufacturer` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `mileage` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `hp` int(11) DEFAULT NULL,
  `cc` int(11) DEFAULT NULL,
  `fuel` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `manufacturer`, `model`, `year`, `price`, `mileage`, `color`, `description`, `image`, `hp`, `cc`, `fuel`, `user_id`) VALUES
(2, 'Honda', 'Civic', 2018, '22000.00', 8000, 'Red', 'Excellent condition', 'car2.jpg', 160, 1800, 'Petrol', 2),
(3, 'Ford', 'Mustang', 2020, '40000.00', 2000, 'Yellow', 'Sporty and powerful', 'car3.jpg', 450, 5000, 'Petrol', 3),
(4, 'Chevrolet', 'Cruze', 2017, '18000.00', 10000, 'Silver', 'Fuel-efficient', 'car4.jpg', 140, 1600, 'Diesel', 4),
(5, 'BMW', 'X5', 2021, '60000.00', 3000, 'Black', 'Luxurious SUV', 'car5.jpg', 350, 4000, 'Petrol', 1),
(6, 'Mercedes-Benz', 'C-Class', 2019, '35000.00', 6000, 'White', 'Premium sedan', 'car6.jpg', 250, 2500, 'Petrol', 2),
(7, 'Audi', 'A4', 2018, '32000.00', 9000, 'Gray', 'Elegant and comfortable', 'car7.jpg', 190, 2000, 'Petrol', 3),
(8, 'Volkswagen', 'Golf', 2016, '15000.00', 12000, 'Green', 'Reliable and practical', 'car8.jpg', 110, 1400, 'Diesel', 4),
(9, 'Nissan', 'Altima', 2017, '18000.00', 8000, 'Silver', 'Smooth ride', 'car9.jpg', 160, 1800, 'Petrol', 1),
(10, 'Hyundai', 'Elantra', 2020, '20000.00', 5000, 'Red', 'Modern features', 'car10.jpg', 150, 1600, 'Petrol', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `password`, `first_name`, `last_name`, `email`) VALUES
(1, 'password123', 'John', 'Doe', 'john.doe@example.com'),
(2, 'pass456', 'Jane', 'Smith', 'jane.smith@example.com'),
(3, 'securepwd', 'Mike', 'Jackson', 'mike.jackson@example.com'),
(4, '12345pwd', 'Emma', 'Wilson', 'emma.wilson@example.com'),
(5, 'abc123', 'Alex', 'Brown', 'alex.brown@example.com'),
(6, '123sda4', 'fasd', 'sadfasfd', 'asdfasdf@asd.co');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
