use chirpr;

drop table users;

create table users (
	id int not null auto_increment primary key,
    name varchar(20) not null,
    email varchar(50) not null,
    password text null,
    _created datetime default current_timestamp
);

drop table chirps;

create table chirps (
	id int not null auto_increment primary key,
    userid int not null,
    text varchar(500) not null,
    location varchar(50) null,
    _created datetime default current_timestamp
);

alter table chirps
add constraint fk_chirpsusers
foreign key (userid)
references users(id);

show create table chirps;

insert into users (name, email, password)
values('bob', 'bob@bob.net', 'I love bob!');
insert into users (name, email, password)
values('George', 'hackerG@yahoo.org', 'kjhg97as6dg(^&TGg97gyfdski');
insert into users (name, email)
values('bot1-dyus', 'bot1-dyus@botnetwork.org');
insert into users (name, email, password)
values('bob2', 'bob@bob.net2', 'I love bob!2');
insert into users (name, email, password)
values('George2', 'hackerG@yahoo.org2', 'kjhg97as6dg(^&TGg97gyfdski2');
insert into users (name, email)
values('bot1-dyus2', 'bot1-dyus@botnetwork.org2');
insert into users (name, email, password)
values('bob3', 'bob@bob.net3', 'I love bob!3');
insert into users (name, email, password)
values('George3', 'hackerG@yahoo.org3', 'kjhg97as6dg(^&TGg97gyfdski3');
insert into users (name, email)
values('bot1-dyus3', 'bot1-dyus@botnetwork.org3');
insert into users (name, email, password)
values('lonely', 'loneliest_lonely_loner@allbyyour.self', 'sad face 123');

select email, password from users;

insert into chirps (userid, text)
values (3, 'yo1');
insert into chirps (userid, text)
values (2, 'yo2');
insert into chirps (userid, text)
values (5, 'yo3');
insert into chirps (userid, text, location)
values (8, 'yo4', '0, 0');
insert into chirps (userid, text)
values (7, 'yo5');
insert into chirps (userid, text)
values (8, 'yo6');
insert into chirps (userid, text)
values (9, 'yo7');
insert into chirps (userid, text)
values (4, 'yo8');
insert into chirps (userid, text)
values (1, 'yo9');
insert into chirps (userid, text)
values (6, 'yo10');
insert into chirps (userid, text)
values (9, 'yo11');
insert into chirps (userid, text, location)
values (10, 'yo12', 'ABQ');
insert into chirps (userid, text, location)
values (10, 'yo13', 'ABQ');
insert into chirps (userid, text)
values (1, 'yo14');
insert into chirps (userid, text)
values (3, 'yo15');
insert into chirps (userid, text)
values (8, 'yo16');
insert into chirps (userid, text)
values (7, 'yo17');
insert into chirps (userid, text, location)
values (5, 'yo18', 'no where');
insert into chirps (userid, text)
values (1, 'yo19');
insert into chirps (userid, text)
values (2, 'yo20');

select u.name, u.email, c.text
from users as u
join chirps as c
where u.id=c.userid;