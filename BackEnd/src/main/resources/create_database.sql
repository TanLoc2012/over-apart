drop database if exists specialized_project;
create database specialized_project;
use specialized_project;

create table role (
	id bigint auto_increment primary key,
    name varchar(255) not null
);

create table bank (
	id bigint auto_increment primary key,
    name varchar(255) not null
);

create table user (
	id bigint auto_increment primary key,
    gender varchar(255),
    full_name varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null,
    status varchar(255) not null,
    phone varchar(255),
    shop_name varchar(255),
    birthday date,
    avatar text,
    bank_id bigint,
    account_number varchar(255),
    is_deleted varchar(255) not null
);

create table layout (
	id bigint auto_increment primary key,
    image text not null,
    block varchar(255) not null,
    room varchar(255) not null,
    area double not null,
    model text not null,
    apartment_id bigint not null,
    floor_texture_id bigint not null,
    floor_texture_scale double not null
);

create table apartment (
	id bigint auto_increment primary key,
    name varchar(255) not null,
    city varchar(255) not null,
    district varchar(255) not null,
    description varchar(255),
    area double not null
);

create table real_project (
	id bigint auto_increment primary key,
    created_at datetime not null, 
	updated_at datetime not null, 
    model text not null,
    share bool not null,
    image text not null,
    total_price double,
    name varchar(255) not null,
    creator_id bigint not null,
    layout_id bigint not null
);

create table room_type (
	id bigint auto_increment primary key,
    name varchar(255) not null
);

create table category (
	id bigint auto_increment primary key,
    name varchar(255) not null
);

create table product (
	id bigint auto_increment primary key,
    sold_quantity int,
    model text,
    description varchar(255),
    warranty varchar(255),
    origin varchar(255),
    status varchar(255) not null,
    discount double,
    price double,
    name varchar(255) not null,
    seller_id bigint not null,
    category_id bigint not null
);

create table sample_design (
	id bigint auto_increment primary key,
    area double not null,
    created_at datetime not null,
	updated_at datetime not null, 
    name varchar(255) not null,
    model text not null,
    share bool not null,
    total_price double,
    image text not null,
    floor_texture_id bigint not null,
    floor_texture_scale double not null,
    creator_id bigint not null,
    room_type_id bigint not null
);

create table orders (
	id bigint auto_increment primary key,
    status varchar(255) not null,
    total_price double not null,
    created_at datetime not null,
    note varchar(255),
    updated_at datetime not null,
    buyer_id bigint not null
);

create table order_detail (
	id bigint auto_increment primary key,
    status varchar(255) not null,
    price double not null,
    quantity int not null,
    order_id bigint not null,
    product_id bigint not null
);

create table attribute (
	id bigint auto_increment primary key,
    value varchar(255) not null,
    type varchar(255) not null
);

create table user_role (
	user_id bigint not null,
    role_id bigint not null,
    primary key (user_id, role_id)
);

create table real_project_feedback (
	id bigint auto_increment primary key,
    content text not null,
    created_at datetime not null,
    rating int,
    updated_at datetime not null,
    user_id bigint not null,
    real_project_id bigint not null
);

create table real_project_like (
	user_id bigint not null,
    real_project_id bigint not null,
    primary key (user_id, real_project_id)
);

create table product_feedback (
	id bigint auto_increment primary key,
    content text not null,
    created_at datetime not null,
    rating int,
    updated_at datetime not null,
    user_id bigint not null,
    product_id bigint not null
);

create table product_like (
	user_id bigint not null,
    product_id bigint not null,
    primary key (user_id, product_id)
);

create table sample_design_feedback (
	id bigint auto_increment primary key,
    content text not null,
    created_at datetime not null,
    rating int,
    updated_at datetime not null,
    user_id bigint not null,
    sample_design_id bigint not null
);

create table sample_design_like (
	user_id bigint not null,
    sample_design_id bigint not null,
    primary key (user_id, sample_design_id)
);

create table real_project_product (
	real_project_id bigint not null,
    product_id bigint not null,
    quantity int not null,
    primary key (real_project_id, product_id)
);

create table sample_design_product (
	sample_design_id bigint not null,
    product_id bigint not null,
    quantity int not null,
    primary key (sample_design_id, product_id)
);

create table real_project_product_location (
	id bigint auto_increment primary key,
    x_pos double not null,
    y_pos double not null,
    z_pos double not null,
    rot_x double not null,
    rot_y double not null,
    rot_z double not null,
    scale_x double not null,
    scale_y double not null,
    scale_z double not null,
    real_project_id bigint not null,
    product_id bigint not null
);

create table sample_design_product_location (
	id bigint auto_increment primary key,
    x_pos double not null,
    y_pos double not null,
    z_pos double not null,
    rot_x double not null,
    rot_y double not null,
    rot_z double not null,
    scale_x double not null,
    scale_y double not null,
    scale_z double not null,
    sample_design_id bigint not null,
    product_id bigint not null
);

create table real_project_attribute (
	real_project_id bigint not null, 
    attribute_id bigint not null,
    primary key (real_project_id, attribute_id)
);

create table sample_design_attribute (
	sample_design_id bigint not null,
    attribute_id bigint not null,
    primary key (sample_design_id, attribute_id)
);

create table product_attribute (
	product_id bigint not null,
    attribute_id bigint not null,
    primary key (product_id, attribute_id)
);

create table room_type_category (
	room_type_id bigint not null,
    category_id bigint not null,
    primary key (room_type_id, category_id)
);

create table user_address (
	id bigint auto_increment primary key,
    district varchar(255) not null,
    city varchar(255) not null,
    is_default bool not null,
    home_address varchar(255) not null,
    user_id bigint not null
);

create table real_project_feedback_image (
	id bigint auto_increment primary key,
    image text not null,
    real_project_feedback_id bigint not null
);

create table product_feedback_image (
	id bigint auto_increment primary key,
    image text not null,
    product_feedback_id bigint not null
);

create table sample_design_feedback_image (
	id bigint auto_increment primary key,
    image text not null,
    sample_design_feedback_id bigint not null
);

create table product_image (
	id bigint auto_increment primary key,
    image text not null,
    product_id bigint not null
);

create table apartment_investor (
	id bigint auto_increment primary key,
    investor varchar(255) not null,
    apartment_id bigint not null
);

create table texture (
	id bigint auto_increment primary key,
    image text not null,
    type varchar(255) not null
);

create table wall (
	id bigint auto_increment primary key,
    height double not null,
    type varchar(255) not null,
    real_project_id bigint,
    sample_design_id bigint
);

create table corner (
	id bigint auto_increment primary key,
    x_pos double not null,
    y_pos double not null
);

create table wall_texture (
	wall_id bigint not null,
    texture_id bigint not null,
    scale double not null,
    position varchar(255) not null,
    primary key (wall_id, texture_id)
);

create table wall_corner (
	wall_id bigint not null,
    corner_id bigint not null,
    primary key (wall_id, corner_id)
);

alter table user
add constraint fk_user_bank foreign key (bank_id) references bank(id);

alter table layout
add constraint fk_layout_apartment foreign key (apartment_id) references apartment(id);

alter table layout
add constraint fk_layout_texture foreign key (floor_texture_id) references texture(id);

alter table real_project
add constraint fk_real_project_creator foreign key (creator_id) references user(id);

alter table real_project
add constraint fk_real_project_layout foreign key (layout_id) references layout(id);

alter table product
add constraint fk_product_seller foreign key (seller_id) references user(id);

alter table product
add constraint fk_product_category foreign key (category_id) references category(id);

alter table sample_design
add constraint fk_sample_design_floor_texture foreign key (floor_texture_id) references texture(id);

alter table sample_design
add constraint fk_sample_design_creator foreign key (floor_texture_id) references user(id);

alter table sample_design
add constraint fk_sample_design_room_type foreign key (room_type_id) references room_type(id);

alter table orders
add constraint fk_order_buyer foreign key (buyer_id) references user(id);

alter table order_detail
add constraint fk_order_detail_order foreign key (order_id) references orders(id);

alter table user_role
add constraint fk_user_role_user foreign key (user_id) references user(id);

alter table user_role
add constraint fk_user_role_role foreign key (role_id) references role(id);

alter table real_project_feedback
add constraint fk_real_project_feedback_1 foreign key (user_id) references user(id);

alter table real_project_feedback
add constraint fk_real_project_feedback_2 foreign key (real_project_id) references real_project(id);

alter table real_project_like
add constraint fk_real_project_like_1 foreign key (user_id) references user(id);

alter table real_project_like
add constraint fk_real_project_like_2 foreign key (real_project_id) references real_project(id);

alter table product_feedback
add constraint fk_product_feedback_1 foreign key (user_id) references user(id);

alter table product_feedback
add constraint fk_product_feedback_2 foreign key (product_id) references product(id);

alter table product_like
add constraint fk_product_like_1 foreign key (user_id) references user(id);

alter table product_like
add constraint fk_product_like_2 foreign key (product_id) references product(id);

alter table sample_design_feedback
add constraint fk_sample_design_feedback_1 foreign key (user_id) references user(id);

alter table sample_design_feedback
add constraint fk_sample_design_feedback_2 foreign key (sample_design_id) references sample_design(id);

alter table sample_design_like
add constraint fk_sample_design_like_1 foreign key (user_id) references user(id);

alter table sample_design_like
add constraint fk_sample_design_like_2 foreign key (sample_design_id) references sample_design(id);

alter table real_project_product
add constraint fk_real_project_product_1 foreign key (real_project_id) references real_project(id);

alter table real_project_product
add constraint fk_real_project_product_2 foreign key (product_id) references product(id);

alter table sample_design_product
add constraint fk_sample_design_product_1 foreign key (sample_design_id) references sample_design(id);

alter table sample_design_product
add constraint fk_sample_design_product_2 foreign key (product_id) references product(id);

alter table real_project_product_location
add constraint fk_real_project_product_location foreign key (real_project_id) references real_project(id);

alter table sample_design_product_location
add constraint fk_sample_design_product_location foreign key (sample_design_id) references sample_design(id);

alter table real_project_attribute
add constraint fk_real_project_attribute_1 foreign key (real_project_id) references real_project(id);

alter table real_project_attribute
add constraint fk_real_project_attribute_2 foreign key (attribute_id) references attribute(id);

alter table sample_design_attribute
add constraint fk_sample_design_attribute_1 foreign key (sample_design_id) references sample_design(id);

alter table sample_design_attribute
add constraint fk_sample_design_attribute_2 foreign key (attribute_id) references attribute(id);

alter table product_attribute
add constraint fk_product_attribute_1 foreign key (product_id) references product(id);

alter table product_attribute
add constraint fk_product_attribute_2 foreign key (attribute_id) references attribute(id);

alter table real_project_feedback_image
add constraint fk_real_project_feedback_image foreign key (real_project_feedback_id) references real_project_feedback(id);

alter table sample_design_feedback_image
add constraint fk_sample_design_feedback_image foreign key (sample_design_feedback_id) references sample_design_feedback(id);

alter table product_image
add constraint fk_product_image foreign key (product_id) references product(id);

alter table apartment_investor
add constraint fk_apartment_investor foreign key (apartment_id) references apartment(id);

alter table wall
add constraint fk_wall_real_project foreign key (real_project_id) references real_project(id);

alter table wall
add constraint fk_wall_sample_design foreign key (sample_design_id) references sample_design(id);

alter table wall_texture
add constraint fk_wall_texture_1 foreign key (wall_id) references wall(id);

alter table wall_texture
add constraint fk_wall_texture_2 foreign key (texture_id) references texture(id);

alter table wall_corner
add constraint fk_wall_corner_1 foreign key (wall_id) references wall(id);

alter table wall_corner
add constraint fk_wall_corner_2 foreign key (corner_id) references corner(id);



