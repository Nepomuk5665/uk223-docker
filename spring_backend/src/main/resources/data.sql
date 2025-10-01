--USERS

-- you can user gen_random_uuid () to generate random IDs, use this only to generate testdata


insert into users (id, email,first_name,last_name, password)
values ('ba804cb9-fa14-42a5-afaf-be488742fc54', 'admin@example.com', 'James','Bond', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6' ), -- Password: 1234
       ('0d8fa44c-54fd-4cd0-ace9-2a7da57992de', 'user@example.com', 'Tyler','Durden', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'), -- Password: 1234
       -- 200 Test Users with real names
       (gen_random_uuid(), 'john.smith@example.com', 'John', 'Smith', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'emma.johnson@example.com', 'Emma', 'Johnson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'michael.williams@example.com', 'Michael', 'Williams', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'olivia.brown@example.com', 'Olivia', 'Brown', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'william.jones@example.com', 'William', 'Jones', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'sophia.garcia@example.com', 'Sophia', 'Garcia', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'james.miller@example.com', 'James', 'Miller', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ava.davis@example.com', 'Ava', 'Davis', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'robert.rodriguez@example.com', 'Robert', 'Rodriguez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'isabella.martinez@example.com', 'Isabella', 'Martinez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'david.hernandez@example.com', 'David', 'Hernandez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'mia.lopez@example.com', 'Mia', 'Lopez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'joseph.gonzalez@example.com', 'Joseph', 'Gonzalez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'charlotte.wilson@example.com', 'Charlotte', 'Wilson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'charles.anderson@example.com', 'Charles', 'Anderson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'amelia.thomas@example.com', 'Amelia', 'Thomas', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'thomas.taylor@example.com', 'Thomas', 'Taylor', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'harper.moore@example.com', 'Harper', 'Moore', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'christopher.jackson@example.com', 'Christopher', 'Jackson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'evelyn.martin@example.com', 'Evelyn', 'Martin', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'daniel.lee@example.com', 'Daniel', 'Lee', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'abigail.perez@example.com', 'Abigail', 'Perez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'matthew.thompson@example.com', 'Matthew', 'Thompson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'emily.white@example.com', 'Emily', 'White', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'anthony.harris@example.com', 'Anthony', 'Harris', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'elizabeth.sanchez@example.com', 'Elizabeth', 'Sanchez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'mark.clark@example.com', 'Mark', 'Clark', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'sofia.ramirez@example.com', 'Sofia', 'Ramirez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'donald.lewis@example.com', 'Donald', 'Lewis', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'camila.robinson@example.com', 'Camila', 'Robinson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'steven.walker@example.com', 'Steven', 'Walker', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'aria.young@example.com', 'Aria', 'Young', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'paul.allen@example.com', 'Paul', 'Allen', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'luna.king@example.com', 'Luna', 'King', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'andrew.wright@example.com', 'Andrew', 'Wright', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'grace.scott@example.com', 'Grace', 'Scott', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'joshua.torres@example.com', 'Joshua', 'Torres', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'chloe.nguyen@example.com', 'Chloe', 'Nguyen', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'kenneth.hill@example.com', 'Kenneth', 'Hill', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'penelope.flores@example.com', 'Penelope', 'Flores', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'kevin.green@example.com', 'Kevin', 'Green', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'layla.adams@example.com', 'Layla', 'Adams', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'brian.nelson@example.com', 'Brian', 'Nelson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'riley.baker@example.com', 'Riley', 'Baker', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'george.hall@example.com', 'George', 'Hall', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'zoey.rivera@example.com', 'Zoey', 'Rivera', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'edward.campbell@example.com', 'Edward', 'Campbell', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'nora.mitchell@example.com', 'Nora', 'Mitchell', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ronald.carter@example.com', 'Ronald', 'Carter', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'lily.roberts@example.com', 'Lily', 'Roberts', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'timothy.gomez@example.com', 'Timothy', 'Gomez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'eleanor.phillips@example.com', 'Eleanor', 'Phillips', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jason.evans@example.com', 'Jason', 'Evans', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'hannah.turner@example.com', 'Hannah', 'Turner', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jeffrey.diaz@example.com', 'Jeffrey', 'Diaz', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'lillian.parker@example.com', 'Lillian', 'Parker', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ryan.cruz@example.com', 'Ryan', 'Cruz', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'addison.edwards@example.com', 'Addison', 'Edwards', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jacob.collins@example.com', 'Jacob', 'Collins', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'aubrey.reyes@example.com', 'Aubrey', 'Reyes', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'gary.stewart@example.com', 'Gary', 'Stewart', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ellie.morris@example.com', 'Ellie', 'Morris', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'nicholas.morales@example.com', 'Nicholas', 'Morales', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'stella.murphy@example.com', 'Stella', 'Murphy', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'eric.cook@example.com', 'Eric', 'Cook', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'natalie.rogers@example.com', 'Natalie', 'Rogers', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jonathan.morgan@example.com', 'Jonathan', 'Morgan', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'savannah.peterson@example.com', 'Savannah', 'Peterson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'stephen.cooper@example.com', 'Stephen', 'Cooper', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'audrey.reed@example.com', 'Audrey', 'Reed', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'larry.bailey@example.com', 'Larry', 'Bailey', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'maya.bell@example.com', 'Maya', 'Bell', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'justin.cox@example.com', 'Justin', 'Cox', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'genesis.ward@example.com', 'Genesis', 'Ward', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'scott.howard@example.com', 'Scott', 'Howard', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'paisley.wood@example.com', 'Paisley', 'Wood', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'benjamin.james@example.com', 'Benjamin', 'James', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'sadie.bennet@example.com', 'Sadie', 'Bennet', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'brandon.gray@example.com', 'Brandon', 'Gray', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'kennedy.mendoza@example.com', 'Kennedy', 'Mendoza', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'raymond.ruiz@example.com', 'Raymond', 'Ruiz', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'claire.hughes@example.com', 'Claire', 'Hughes', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'gregory.price@example.com', 'Gregory', 'Price', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'lucy.alvarez@example.com', 'Lucy', 'Alvarez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'samuel.castillo@example.com', 'Samuel', 'Castillo', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'anna.sanders@example.com', 'Anna', 'Sanders', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'patrick.patel@example.com', 'Patrick', 'Patel', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'caroline.myers@example.com', 'Caroline', 'Myers', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'alexander.long@example.com', 'Alexander', 'Long', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'nova.ross@example.com', 'Nova', 'Ross', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jack.foster@example.com', 'Jack', 'Foster', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'brooklyn.jimenez@example.com', 'Brooklyn', 'Jimenez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'dennis.powell@example.com', 'Dennis', 'Powell', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'madelyn.sullivan@example.com', 'Madelyn', 'Sullivan', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jerry.russell@example.com', 'Jerry', 'Russell', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'naomi.ortiz@example.com', 'Naomi', 'Ortiz', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'tyler.jenkins@example.com', 'Tyler', 'Jenkins', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'elena.gutierrez@example.com', 'Elena', 'Gutierrez', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'aaron.perry@example.com', 'Aaron', 'Perry', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'samantha.butler@example.com', 'Samantha', 'Butler', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jose.barnes@example.com', 'Jose', 'Barnes', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'eva.fisher@example.com', 'Eva', 'Fisher', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'nathan.henderson@example.com', 'Nathan', 'Henderson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'alice.coleman@example.com', 'Alice', 'Coleman', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'christian.simmons@example.com', 'Christian', 'Simmons', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'maria.patterson@example.com', 'Maria', 'Patterson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'dylan.jordan@example.com', 'Dylan', 'Jordan', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'naomi.reynolds@example.com', 'Naomi', 'Reynolds', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'elijah.hamilton@example.com', 'Elijah', 'Hamilton', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'josephine.graham@example.com', 'Josephine', 'Graham', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jordan.kim@example.com', 'Jordan', 'Kim', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'violet.wallace@example.com', 'Violet', 'Wallace', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'cameron.woods@example.com', 'Cameron', 'Woods', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'julia.cole@example.com', 'Julia', 'Cole', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'angel.west@example.com', 'Angel', 'West', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'delilah.jordan@example.com', 'Delilah', 'Jordan', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jeremiah.owens@example.com', 'Jeremiah', 'Owens', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ivy.reynolds@example.com', 'Ivy', 'Reynolds', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'carlos.lawson@example.com', 'Carlos', 'Lawson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'willow.franklin@example.com', 'Willow', 'Franklin', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'austin.bishop@example.com', 'Austin', 'Bishop', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'emilia.lynch@example.com', 'Emilia', 'Lynch', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'peter.carr@example.com', 'Peter', 'Carr', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jade.salazar@example.com', 'Jade', 'Salazar', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'harold.austin@example.com', 'Harold', 'Austin', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'kinsley.peters@example.com', 'Kinsley', 'Peters', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'kyle.kelley@example.com', 'Kyle', 'Kelley', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'daisy.dunn@example.com', 'Daisy', 'Dunn', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'carl.pierce@example.com', 'Carl', 'Pierce', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'sienna.arnold@example.com', 'Sienna', 'Arnold', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jeremy.tran@example.com', 'Jeremy', 'Tran', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'josephine.montgomery@example.com', 'Josephine', 'Montgomery', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'keith.lawrence@example.com', 'Keith', 'Lawrence', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'lila.ellis@example.com', 'Lila', 'Ellis', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'douglas.harrison@example.com', 'Douglas', 'Harrison', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'rachel.gibson@example.com', 'Rachel', 'Gibson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'henry.mcdonald@example.com', 'Henry', 'McDonald', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'zara.cruz@example.com', 'Zara', 'Cruz', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'arthur.marshall@example.com', 'Arthur', 'Marshall', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'mary.lawson@example.com', 'Mary', 'Lawson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ethan.fuller@example.com', 'Ethan', 'Fuller', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'andrea.boyd@example.com', 'Andrea', 'Boyd', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'terry.mason@example.com', 'Terry', 'Mason', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'morgan.shaw@example.com', 'Morgan', 'Shaw', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'sean.duncan@example.com', 'Sean', 'Duncan', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'clara.armstrong@example.com', 'Clara', 'Armstrong', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'gerald.hudson@example.com', 'Gerald', 'Hudson', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'vivian.carroll@example.com', 'Vivian', 'Carroll', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'philip.lane@example.com', 'Philip', 'Lane', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'melody.andrews@example.com', 'Melody', 'Andrews', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'jesse.hunt@example.com', 'Jesse', 'Hunt', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'diana.cunningham@example.com', 'Diana', 'Cunningham', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ralph.bradley@example.com', 'Ralph', 'Bradley', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'quinn.ford@example.com', 'Quinn', 'Ford', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'roy.jensen@example.com', 'Roy', 'Jensen', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'ariana.grant@example.com', 'Ariana', 'Grant', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'eugene.herrera@example.com', 'Eugene', 'Herrera', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'adalynn.kelley@example.com', 'Adalynn', 'Kelley', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'russell.montgomery@example.com', 'Russell', 'Montgomery', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'allison.holland@example.com', 'Allison', 'Holland', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'louis.meyer@example.com', 'Louis', 'Meyer', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'katherine.boyd@example.com', 'Katherine', 'Boyd', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'philip.mills@example.com', 'Philip', 'Mills', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'athena.warren@example.com', 'Athena', 'Warren', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'juan.dixon@example.com', 'Juan', 'Dixon', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'bella.ramos@example.com', 'Bella', 'Ramos', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'willie.meyer@example.com', 'Willie', 'Meyer', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'aaliyah.boyd@example.com', 'Aaliyah', 'Boyd', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'randy.mills@example.com', 'Randy', 'Mills', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),
       (gen_random_uuid(), 'savannah.warren@example.com', 'Savannah', 'Warren', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6')
    ON CONFLICT DO NOTHING;


--ROLES
INSERT INTO role(id, name)
VALUES ('d29e709c-0ff1-4f4c-a7ef-09f656c390f1', 'DEFAULT'),
       ('ab505c92-7280-49fd-a7de-258e618df074', 'ADMIN'),
       ('c6aee32d-8c35-4481-8b3e-a876a39b0c02', 'USER')
    ON CONFLICT DO NOTHING;

--AUTHORITIES
INSERT INTO authority(id, name)
VALUES ('2ebf301e-6c61-4076-98e3-2a38b31daf86', 'DEFAULT'),
       ('76d2cbf6-5845-470e-ad5f-2edb9e09a868', 'USER_MODIFY'),
       ('21c942db-a275-43f8-bdd6-d048c21bf5ab', 'USER_DEACTIVATE'),
       ('44d2c4b8-3e5a-4d6f-b9e1-7c8e9a1b2c3d', 'SEE_DASHBOARD'),
       ('a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 'EVENT_CREATE'),
       ('b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e', 'EVENT_MODIFY'),
       ('c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f', 'EVENT_DELETE'),
       ('d4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a', 'EVENT_VIEW'),
       ('e5f6a7b8-9c0d-1e2f-3a4b-5c6d7e8f9a0b', 'USER_VIEW')
    ON CONFLICT DO NOTHING;

--assign roles to users
insert into users_role (users_id, role_id)
values ('ba804cb9-fa14-42a5-afaf-be488742fc54', 'ab505c92-7280-49fd-a7de-258e618df074'), -- James Bond gets ADMIN role only
       ('0d8fa44c-54fd-4cd0-ace9-2a7da57992de', 'c6aee32d-8c35-4481-8b3e-a876a39b0c02')  -- Tyler Durden gets USER role only
    ON CONFLICT DO NOTHING;

-- Assign USER role to all 200 test users
INSERT INTO users_role (users_id, role_id)
SELECT u.id, 'c6aee32d-8c35-4481-8b3e-a876a39b0c02' -- USER role ID
FROM users u
WHERE u.email LIKE '%@example.com'
  AND u.email NOT IN ('admin@example.com', 'user@example.com')
    ON CONFLICT DO NOTHING;

--assign authorities to roles
INSERT INTO role_authority(role_id, authority_id)
VALUES ('d29e709c-0ff1-4f4c-a7ef-09f656c390f1', '2ebf301e-6c61-4076-98e3-2a38b31daf86'),
-- ADMIN authorities
       ('ab505c92-7280-49fd-a7de-258e618df074', '76d2cbf6-5845-470e-ad5f-2edb9e09a868'),
       ('ab505c92-7280-49fd-a7de-258e618df074', '21c942db-a275-43f8-bdd6-d048c21bf5ab'),
       ('ab505c92-7280-49fd-a7de-258e618df074', '44d2c4b8-3e5a-4d6f-b9e1-7c8e9a1b2c3d'),
       ('ab505c92-7280-49fd-a7de-258e618df074', 'b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e'),
       ('ab505c92-7280-49fd-a7de-258e618df074', 'c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f'),
       ('ab505c92-7280-49fd-a7de-258e618df074', 'd4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a'),
       ('ab505c92-7280-49fd-a7de-258e618df074', 'e5f6a7b8-9c0d-1e2f-3a4b-5c6d7e8f9a0b'), -- USER_VIEW
-- USER authorities
       ('c6aee32d-8c35-4481-8b3e-a876a39b0c02', 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
       ('c6aee32d-8c35-4481-8b3e-a876a39b0c02', 'd4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a'),
       ('c6aee32d-8c35-4481-8b3e-a876a39b0c02', 'e5f6a7b8-9c0d-1e2f-3a4b-5c6d7e8f9a0b'), -- USER_VIEW
-- DEFAULT authorities
       ('d29e709c-0ff1-4f4c-a7ef-09f656c390f1', 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d'),
       ('d29e709c-0ff1-4f4c-a7ef-09f656c390f1', 'd4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a')
    ON CONFLICT DO NOTHING;

--EVENTS TEST DATA
INSERT INTO event(id, name, location, event_date, description, creator_id)
VALUES ('e1234567-89ab-cdef-0123-456789abcdef', 'Noser Young Party', 'Herostrasse 12, 8048 Zürich', '2026-02-15 19:00:00',
        'Gemeinsame Party bei Noser Young', '0d8fa44c-54fd-4cd0-ace9-2a7da57992de'),
       ('f1234567-89ab-cdef-0123-456789abcdef', 'Team Meeting', 'Herostrasse 12, 8048 Zürich', '2026-03-20 10:00:00',
        'Monatliches Team Meeting', '0d8fa44c-54fd-4cd0-ace9-2a7da57992de')
    ON CONFLICT DO NOTHING;

--Add participants to events
INSERT INTO event_participants(event_id, user_id)
VALUES ('e1234567-89ab-cdef-0123-456789abcdef', '0d8fa44c-54fd-4cd0-ace9-2a7da57992de') -- Tyler Durden (USER) participates in Noser Young Party
    ON CONFLICT DO NOTHING;