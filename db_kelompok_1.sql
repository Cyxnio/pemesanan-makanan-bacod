-- --------------------------------------------------------
-- Host:                         sql12.freemysqlhosting.net
-- Server version:               5.5.62-0ubuntu0.14.04.1 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for sql12599979
DROP DATABASE IF EXISTS `db_kelompok_1`;
CREATE DATABASE IF NOT EXISTS `db_kelompok_1` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_kelompok_1`;

-- Dumping structure for table sql12599979.tabel_menu
DROP TABLE IF EXISTS `tabel_menu`;
CREATE TABLE IF NOT EXISTS `tabel_menu` (
  `nomer` int(11) NOT NULL,
  `nama_makanan` varchar(50) NOT NULL DEFAULT '',
  `harga_makanan` int(11) NOT NULL,
  `stok_makanan` tinyint(4) NOT NULL DEFAULT '0',
  `foto_makanan` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`nomer`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table sql12599979.tabel_menu: ~6 rows (approximately)
INSERT INTO `tabel_menu` (`nomer`, `nama_makanan`, `harga_makanan`, `stok_makanan`, `foto_makanan`) VALUES
	(1, 'nasi goreng', 15000, 1, 'https://i0.wp.com/resepkoki.id/wp-content/uploads/'),
	(2, 'soto', 20000, 1, 'https://blue.kumparan.com/image/upload/fl_progress'),
	(3, 'ayam geprek', 10000, 1, 'https://akcdn.detik.net.id/api/wm/2021/04/19/ayam-'),
	(4, 'iga bakar', 30000, 1, 'https://awsimages.detik.net.id/community/media/vis'),
	(5, 'es lemon', 8000, 1, 'https://static.republika.co.id/uploads/images/inpi'),
	(6, 'jus strawberry', 10000, 1, 'https://www.suppliersalon.com/wp-content/uploads/2');

-- Dumping structure for table sql12599979.tabel_pemesanan
DROP TABLE IF EXISTS `tabel_pemesanan`;
CREATE TABLE IF NOT EXISTS `tabel_pemesanan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomor_meja` int(11) NOT NULL DEFAULT '0',
  `tanggal_pesan` varchar(50) NOT NULL,
  `pesanan` longtext NOT NULL,
  `nama_pemesan` varchar(50) NOT NULL,
  `total_pesanan` int(11) NOT NULL,
  `no_telepon` varchar(50) NOT NULL,
  `note` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table sql12599979.tabel_pemesanan: ~2 rows (approximately)
INSERT INTO `tabel_pemesanan` (`id`, `nomor_meja`, `tanggal_pesan`, `pesanan`, `nama_pemesan`, `total_pesanan`, `no_telepon`, `note`) VALUES
	(1, 1, '2023-02-21', '[{ "nomer": 1, "nama": "nasi goreng", "harga": 15000, "jumlah": 2 }, { "nomer" : 2, "nama": "soto", "harga": 15000, "jumlah": 3 }]', 'asep coders', 75000, '0812345678910', 'nasinya jgn digoreng'),
	(2, 1, '2023-02-21', '[{ "nomer": 1, "nama": "nasi goreng", "harga": 15000, "jumlah": 2 }, { "nomer" : 2, "nama": "soto", "harga": 15000, "jumlah": 3 }]', 'asep coders', 75000, '0812345678910', 'nasinya jgn digoreng');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
