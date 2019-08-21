use chirpr;

create table mentions (
    userid int not null,
	chirpid int not null,
    primary key (chirpid, userid)
);

alter table mentions
add constraint fk_mentions_userid
foreign key (userid)
references users(id);

alter table mentions
add constraint fk_mentions_chirpid
foreign key (chirpid)
references chirps(id);

insert into mentions(userid, chirpid)
values(3, 9);
insert into mentions(userid, chirpid)
values(1, 6);
insert into mentions(userid, chirpid)
values(3, 12);
insert into mentions(userid, chirpid)
values(1, 13);
insert into mentions(userid, chirpid)
values(8, 7);

select u1.id as caller_id, u1.name, c.text, u2.id as called_id, u2.name, m.* from users as u1
join users as u2
join chirps as c
join mentions as m
where m.userid=u2.id and m.chirpid=c.id and u1.id=c.userid;

# grab all mentions of userid=3
select u2.name as mentioned, u1.name as mentioned_by, c.text as in_chirp from users as u1
join users as u2
join chirps as c
join mentions as m
where m.userid=u2.id and m.chirpid=c.id and u1.id=c.userid
and u2.id=3;