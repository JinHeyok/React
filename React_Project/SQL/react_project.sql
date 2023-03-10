USE react_project;

-- DROP TABLE store_USER;
-- DROP TABLE stroe_category;
-- DROP TABLE store_product;

CREATE TABLE store_User(
	su_index int unsigned not null AUTO_INCREMENT,
	su_id varchar(100) not null,
    su_pw varchar(100) not null,
	constraint primary key(su_index)
);


CREATE TABLE store_category(
    sc_index int unsigned not null auto_increment,
    sc_categoryName varchar(100) not null,
    constraint primary key (sc_index)
);

CREATE TABLE store_product(
	sp_index int unsigned not null auto_increment,
    sc_index int not null,
    sp_name varchar(200) not null,
    sp_summary varchar(255) not null,
    sp_price varchar(200) not null,
    sp_thumbnail varchar(200) not null,
    sp_image varchar(255),
    sp_visit int unsigned default 0,
    constraint primary key (sp_index),
    constraint foreign key (sp_index) REFERENCES store_category(sc_index) ON UPDATE CASCADE ON DELETE CASCADE
);


