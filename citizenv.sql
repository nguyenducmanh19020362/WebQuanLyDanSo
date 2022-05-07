-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2021 at 02:25 PM
-- Server version: 10.4.18-MariaDB-log
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `citizenv`
--

-- --------------------------------------------------------

--
-- Table structure for table `area_codes`
--

CREATE TABLE `area_codes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Tenkhuvuc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ma` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `area_codes`
--

INSERT INTO `area_codes` (`id`, `Tenkhuvuc`, `Ma`, `created_at`, `updated_at`) VALUES
(1, 'Cả nước', 'admin', '2021-12-28 05:15:41', '2021-12-28 05:15:41'),
(2, 'Hải Dương', '01', '2021-12-28 05:16:51', '2021-12-28 05:16:51'),
(3, 'Gia Lộc', '0101', '2021-12-28 05:17:39', '2021-12-28 05:17:39'),
(4, 'Thống Kênh', '010101', '2021-12-28 05:19:15', '2021-12-28 05:19:15'),
(5, 'Đồng Tái', '01010101', '2021-12-28 05:20:20', '2021-12-28 05:20:20'),
(6, 'Hưng Yên', '02', '2021-12-28 05:23:08', '2021-12-28 05:23:08'),
(7, 'Đồng Đức', '01010102', '2021-12-28 05:35:10', '2021-12-28 05:35:10'),
(8, 'Hà Nội', '03', '2021-12-28 05:42:35', '2021-12-28 05:42:35'),
(9, 'Bắc Giang', '04', '2021-12-28 06:07:06', '2021-12-28 06:07:06');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(200, '2014_10_12_000000_create_users_table', 1),
(201, '2014_10_12_100000_create_password_resets_table', 1),
(202, '2019_08_19_000000_create_failed_jobs_table', 1),
(203, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(204, '2021_12_21_141333_create_personal_infomations_table', 1),
(205, '2021_12_25_092353_create_area_codes_table', 1),
(206, '2021_12_26_043818_create_permissions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `allowed` int(11) NOT NULL,
  `start` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `username`, `allowed`, `start`, `end`, `status`, `role`, `created_at`, `updated_at`) VALUES
(1, 'admin', 0, NULL, NULL, 0, '5', '2021-12-28 05:15:41', '2021-12-28 05:15:41'),
(2, '01', 1, '28-12-2021', '30-12-2021', 0, '2', '2021-12-28 05:16:51', '2021-12-28 05:30:29'),
(3, '0101', 1, '28-12-2021', '30-12-2021', 0, '4', '2021-12-28 05:17:39', '2021-12-28 05:31:43'),
(4, '010101', 1, '28-12-2021', '30-12-2021', 1, '6', '2021-12-28 05:19:15', '2021-12-28 06:13:32'),
(5, '01010101', 0, NULL, NULL, 0, '8', '2021-12-28 05:20:20', '2021-12-28 05:20:20'),
(6, '02', 0, '28-12-2021', '30-12-2021', 0, '2', '2021-12-28 05:23:08', '2021-12-28 05:23:42'),
(7, '01010102', 1, '28-12-2021', '30-12-2021', 0, '8', '2021-12-28 05:35:10', '2021-12-28 05:35:17'),
(8, '03', 0, '28-12-2021', '30-12-2021', 0, '2', '2021-12-28 05:42:35', '2021-12-28 05:42:59'),
(9, '04', 0, '28-12-2021', '30-12-2021', 0, '2', '2021-12-28 06:07:06', '2021-12-28 06:07:29');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(29, 'App\\Models\\User', 4, 'laravelapi', '640407a2a53be118e8708ebf610bbede52a6585de962f04b2b1fd0c0fc6f9a4c', '[\"*\"]', '2021-12-28 06:13:32', '2021-12-28 06:11:18', '2021-12-28 06:13:32');

-- --------------------------------------------------------

--
-- Table structure for table `personal_infomations`
--

CREATE TABLE `personal_infomations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `CCCD` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Hovaten` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ngaysinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Gioitinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Quequan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Diachithuongtru` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Diachitamtru` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tongiao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Trinhdovanhoa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nghenghiep` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ma` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_infomations`
--

INSERT INTO `personal_infomations` (`id`, `CCCD`, `Hovaten`, `Ngaysinh`, `Gioitinh`, `Quequan`, `Diachithuongtru`, `Diachitamtru`, `Tongiao`, `Trinhdovanhoa`, `Nghenghiep`, `Ma`, `created_at`, `updated_at`) VALUES
(3, '123456789101', 'Nguyễn Đức Mạnh', '01-10-2001', 'Nam', 'Hải Dương', 'Đồng Tái-Thống Kênh-Gia Lộc-Hải Dương', 'Hà Nội', 'Không', 'Đại Học', 'Sinh viên', '01010101', '2021-12-28 06:10:57', '2021-12-28 06:10:57');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2y$10$vIPqkG3Dd83I/WOaLL7TSeR2BF0vU26hVpK0rozZKJIHxkkTXPC/S', '2021-12-28 05:15:42', '2021-12-28 05:15:42'),
(2, '01', '$2y$10$iHmQs02JPD6JOkE/D6AGMuTKbe2S0l3eUxHvtVxvEYO.nUBKjbAHy', '2021-12-28 05:16:51', '2021-12-28 05:16:51'),
(3, '0101', '$2y$10$RyeZC0g8iyD3XpWVRVP2humH/s31UI6WDTBX2xdU56wHY9dLpORZG', '2021-12-28 05:17:39', '2021-12-28 05:17:39'),
(4, '010101', '$2y$10$4NtcahWFEjSmjw2ZQGN6peEXQxFU3gkhKM3gCJXlv9.z1fWxdFD8i', '2021-12-28 05:19:15', '2021-12-28 05:19:15'),
(5, '01010101', '$2y$10$r61lyqryVLGJrw2FnyGTr.SSerJAhBDZrugGxT4O1EzmdThK1BXbe', '2021-12-28 05:20:20', '2021-12-28 05:20:20'),
(6, '02', '$2y$10$nx/ldKd7e7aPIRflpIsh1.d.eZp3wqKfWxN69TIRm8X25sX2Xn336', '2021-12-28 05:23:08', '2021-12-28 05:23:08'),
(7, '01010102', '$2y$10$nEGv2STgbyAkHsHP3d6K4OUsfteTpjAIWc9bB05wPSa8bzG6ubFJC', '2021-12-28 05:35:10', '2021-12-28 05:35:10'),
(8, '03', '$2y$10$g6DKSBrgi/bjZSXH8GNlZ.3yB/gOV5oikObjGnK9/Zeat/oh8nrKm', '2021-12-28 05:42:35', '2021-12-28 05:42:35'),
(9, '04', '$2y$10$u5I2WZbBJdxqesu.yLY/J.ehppzTD.MTSrsKn4mvdLOVz/KRFY7Ja', '2021-12-28 06:07:06', '2021-12-28 06:07:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area_codes`
--
ALTER TABLE `area_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `personal_infomations`
--
ALTER TABLE `personal_infomations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area_codes`
--
ALTER TABLE `area_codes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `personal_infomations`
--
ALTER TABLE `personal_infomations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
