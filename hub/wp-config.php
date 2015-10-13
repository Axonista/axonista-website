<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db1035268_axon');

/** MySQL database username */
define('DB_USER', 'u1035268_axon');

/** MySQL database password */
define('DB_PASSWORD', '6okcacp<2 ndlcad');

/** MySQL hostname */
define('DB_HOST', 'mysql972int.cp.blacknight.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6(uSMX,<N$Z[4ogZi+wl^R#AGIU&{[d)?s?&9X$^8nhz6(zva=YDSG<]Of=t5(4$');
define('SECURE_AUTH_KEY',  'wiI$Hc]|<Xm&sih1YY|_{ eL5)6MrxNP3ff.dOOuh2Kz(SMQ`Q)K`q1`R<c-!:*H');
define('LOGGED_IN_KEY',    'GMneQ*IwcGKc!!&Vm=9QABw`[i@BJ6[FyVoLZ>HYc@TO spS:c0-z~>R#lhASq~@');
define('NONCE_KEY',        '7mk %=](!F+>BZx*@LW`*%W2(Fj%C,Fe_{]~t}Il)k#r# S~84>RHIMf09AHy8n@');
define('AUTH_SALT',        'M5h@UWg2520_XF*eBJ-tnb/{2UgvlL!~rxN&Xa*Los!;JN%b5ZY3CjJWJXd!+7*Q');
define('SECURE_AUTH_SALT', 'y~A+%[L/Vri(yLwVDj5pz]WWAgO/K@2p-(!}exH16WwqG+b-FUSf[!)GPIYnpc)H');
define('LOGGED_IN_SALT',   'G82G:%;[hG.lOwq|zf(Oqm9sf)M{6V&:P9#q$=n/;!dJ^&PNRE$i*:[Bncst6&N-');
define('NONCE_SALT',       ':z;QyCj/SQsIv2W%[G)5-01V^MH0Z%c~6?Sp+Dod;KoJgyphk+@[f.>6IBWsT7R@');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'hub_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
