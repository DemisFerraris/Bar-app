INSERT INTO `db_bar`.`users`(`date_of_birth`,`email`,`first_name`,`last_name`,`password`,`username`)VALUES('2023/03/01','www.bar.app@barapp.com','admin','admin','PasswordAdmin1','admin');

INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('birra','Nel 1859 Luigi Moretti fondava a Udine la fabbrica di birra e ghiaccio. Dopo un anno di ricerche, la prima birra esce dal birrificio ed inizia da quel momento una lunga storia Italiana fatta di qualità, passione ed entusiasmo.','https://cdn.shopify.com/s/files/1/0405/7271/5167/products/image_81dfa572-46f3-478b-949b-e0f4645e78cf.jpg?v=1604918914','Birra Moretti','3.50');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('birra','Heineken® si presenta nel calice con una schiuma attraente, fine e compatta. Il colore giallo oro brillante è conferito grazie al malto utilizzato, di primissima qualità.','https://www.tetaverona.com/wp-content/uploads/2020/03/Heineken.jpg','Birra Heineken','3.50');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('birra','Ceres Strong Ale è una birra bionda doppio malto danese prodotta dalla Ceres Brewery di Aarhus. Il suo nome fu scelto dal fondatore nel 1856 per onorare la dea della fertilità Cerere.','https://esedra1984.it/wp-content/uploads/2020/04/ceres.jpg','Birra Ceres','3.50');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('birra','Un altro marchio italiano è quello fondato, alla fine dell’800, da Angelo Poretti. La prima birra prodotta, nel 1877, era bionda e da allora questo brand ha fatto molta strada.','https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dw2c4759ba/large/BIRRAAPORETTI3LUPPOLCL66-8007950010020-1.png','Birra Poretti','3.50');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('bibita','La Coca-Cola (anche nota come Coke, soprattutto negli Stati Uniti) è una bevanda industriale analcolica di tipo bibita.','https://www.coca-colaitalia.it/content/dam/one/it/it/brand-header-mobile/900x600/cocacola-original-taste-desktop-900x600.jpg','Coca-Cola','3.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('bibita','La Coca-Cola zero (anche nota come Coke Zero, soprattutto negli Stati Uniti) è una bevanda industriale analcolica di tipo bibita con zero zuccheri.','https://www.topbevande.it/images/thumbs/0091356_coca-cola-zero-33cl-confezione-da-24-bottiglie-bottiglia-vetro_780.jpeg','Coca-Cola zero','3.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('bibita','Fanta Original è la bevanda gassata con succo di arance 100% italiane prodotta per la prima volta a Napoli nel 1955. Da allora, è diventata famosa e amata in tutto il mondo, senza perdere il suo animo italiano.','https://d2j6dbq0eux0bg.cloudfront.net/images/73109501/2979918178.jpg','Fanta','3.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('bibita','La Sprite è una bevanda analcolica di genere soft drink al gusto di limone, senza caffeina. Si tratta di una gassosa proveniente dalla Germania, inizialmente chiamata Fanta Klare Zitrone (Fanta chiara al limone)','https://cdn1.marcocusano.cloud/D936542D/products/73-c4ca4238a0b923820dcc509a6f75849b','Sprinte','3.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('vini rossi',"La Barbera d'Asti è un vino a DOCG la cui produzione è consentita in numerosi comuni delle province di Asti e Alessandria. La Barbera viene prodotta partendo dalle uve dell'omonimo vitigno, indigeno e ampiamente coltivato nell'area collinare compresa tra i 150 e i 400 metri di altitudine",'https://www.shopiemonte.com/media/1e/0c/0b/1656594178/EN00025-1.jpg',"Barbera d'Asti",'4.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('vini rossi',"Il Dolcetto d'Alba è un vino DOC la cui produzione è consentita nelle province di Asti e Cuneo. È tradizionalmente il vino da pasto più bevuto nelle Langhe.",'https://www.enotecavinoinanfora.it/wp-content/uploads/2020/07/DSC_1076-4-scaled-e1594897564175.jpg',"Dolcetto d'Alba",'4.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('vini bianchi',"Anastasia Brut della Cantina di Mogoro è un spumante ottenuto da uve a bacca bianca autoctone. Il Semidano è un antichissimo vitigno sardo, le cui prime attestazioni letterarie risalgono al 1780 e che un tempo era diffuso in tutta l’isola.",'https://www.spiritone.it/pimages/Anastasia-Spumante-Brut-big-6712.png',"Anastasìa Spumante Brut",'4.00');
INSERT INTO `db_bar`.`products`(`category`,`description`,`image`,`name`,`price`)VALUES('vini bianchi',"È il Moscato più famoso d’Italia e uno dei prodotti più caratteristici della vitivinicoltura piemontese. Un vero omaggio alla tradizione che, nel tempo, ha raggiunto livelli qualitativi straordinari. Conoscere il Moscato D’Asti in tutte le sue note significa amarlo e non lasciarlo mai più.",'https://www.comprendiamo.wine/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/j/1/j1913.jpg',"Moscato d'Asti",'4.00');


INSERT INTO `db_bar`.`user_product`(`user_id`,`product_id`)VALUES(1,1);
