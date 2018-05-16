<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/Applications/MAMP/htdocs/adithi_chandrashekar/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'adithi_chandrashekar');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'rpYda/D)9N@4x+jDMa+a%5_0*pITSP]@cNw:7O,%ZL4Y}P6*|y`?G/Eq8Whr=6wa');
define('SECURE_AUTH_KEY',  'DdRk4Nh.i:n~n.k?m PX+:D]?d)6tjn=:=o 7&HU=N~:|*0@8X>NSY>PW=VUAK1$');
define('LOGGED_IN_KEY',    '75/bG1tWvgPLq&D6rK`g.7yf#H +Rp^[e`g<%<~zG[eXUcce-8]*xHRP;E<s6>z`');
define('NONCE_KEY',        'e ttJBy5;UNRIu}O[rie2~0J-j.TSM)s!:XB*gMO_&iN:Y&1P?w9Zb.+@I|1-wy2');
define('AUTH_SALT',        'zB~CE>j)Wkn*}*<)~DcC|N~A|OK%84oc-R@q?r1`vIF;9j04x@et[Ug5@elQRqf|');
define('SECURE_AUTH_SALT', '@4LCl`A7R^m?=k8WPrA:[o [*JKeG@?noR>},oB>cx,^Tcbsg|Em4urre+Pd#eQi');
define('LOGGED_IN_SALT',   '0FJ~9XdXAf}P7qaI~P{+|_9x4 8ry4ZW?<oI/|56orU?qDZ,0}3;9.-sei1(l=Q*');
define('NONCE_SALT',       'liOzhjGk--|=T.Y_d.{e,g`fy_h~tY|kg7|<RTaU)9NB%?Trhe9mV[2t2B 4Ua7i');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ac_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
