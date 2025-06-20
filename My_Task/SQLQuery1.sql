use demo_user;


create table Empl (
	empno int primary key,
	ename varchar(60),
	job varchar(70),
	mgr int,
	hiredate Date ,
	sal decimal (10,2),
	convn decimal(10,2),
	deptno int
)

drop table Empl;

insert into Empl (empno,ename,job,mgr,hiredate,sal,convn,deptno)
values
(8369, 'SMITH', 'SALESMAN', 8902, '1990-12-18', 800.00, NULL, 20),
(8499, 'ANYA', 'SALESMAN', 8698, '1991-02-20', 1600.00, 300.00, 30),
(8521, 'SETH', 'MANAGER', 8698, '1991-02-22', 1250.00, 500.00, 30),
(8654, 'MAAHADEVAN', 'SALESMAN', 8839, '1991-04-02', 2985.00, NULL, 20),
(8698, 'MOMIN', 'MANAGER', 8698, '1991-09-28', 1250.00, 1400.00, 30),
(8882, 'BINA', 'MANAGER', 8839, '1991-05-01', 285000, NULL, 30),
(8888, 'SHIVANSH', 'ANALYST', 8839, '1991-06-09', 450.00, NULL, 10),
(8839, 'SCOTT', 'PRESIDENT', 8566, '1992-12-09', 3000.00, NULL, 20),
(8844, 'AMIR', 'SALESMAN', NULL, '1991-11-18', 5000.00, NULL, 10);


select ename as name,sal as salary from Empl where sal >=2200;

select * from Empl where convn is null;

select ename , sal from Empl where sal Not between 2500 and 4000;

select ename as name , job as Job,sal as salary  from Empl where  job !='MANAGER';

select * from Empl where SUBSTRING(ename,3,1)='A'; 

SELECT ename as name FROM Empl WHERE ename LIKE '%T';
