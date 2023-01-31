---
title: Database design tips!
author: Giovani Fouz Jiménez
description: When this kind of error occurs...
img: database.jpg
date: octuber 27, 2022
---

### What is a "well-designed" database?
So clearly, good database design is important when trying to build a database that works for you. But what does it actually mean for a database to be well-designed?

Nerd alert: The first person to devise an abstract model for database management was Edgar Frank Codd, an English computer scientist who joined IBM in the 1940s.

### A well-designed database enforces data integrity
Data integrity refers to the overall accuracy, completeness, and consistency of the data in your database; a well-designed database maintains data integrity by implementing the processes and standards proposed during the design phase.

### Data integrity includes three specific technical aspects of a relational database’s structure:

Entity integrity (or table-level integrity) ensures that a table has no duplicate records, and that the values of the table’s primary keys are all unique and not null.
Domain integrity (or field-level integrity) ensures that the purpose of every field is clear and identifiable, and that the values in each field are valid, consistent, and accurate.
Referential integrity (or relationship-level integrity) ensures that the relationships between pairs of tables are sound, so that the records in the tables are synchronized whenever data is entered into, updated in, or deleted from either table.

### How to design your relational database, step by step
If this all sounds unfamiliar or overwhelming, don’t worry—there is a systematic process you can follow that will ensure your relational database management system (or RDBMS) follows good design principles, is well-suited to your organization’s needs, and avoids common pitfalls.

### Step 1: define your purpose and objectives
Before beginning your database design journey, it’s worth taking a step back and answering a very important question: “Why am I making this database?” Are you making this database in order to manage business transactions? To store customer IDs? To solve a particular organizational problem? Whatever the case, it’s worth taking the time to identify the intended purpose of the database you’ll be creating.

You may even wish to work together with managers, leadership, and end users to jointly write out a mission statement for your database, like: “The purpose of the Mingei International Museum database is to maintain the data for our art collection,” or “Zenbooth’s database will store all of the data for our manufacturing resource planning.”

Additionally, you should define the objectives that the end users of the database will have: which specific tasks will the end users need to perform in order to accomplish their work? Developing an explicit list of objectives—like “Know the status and location of each of the pieces of art in our collection at all times,” or “Maintain a complete customer table that shows records for each of our clients.” This will help you determine an appropriate structure, or database schema, for your information as you work through this design process.

### Step 2: analyze data requirements
Before you begin designing your database, you’ll need to analyze your organization’s data fundamentals and requirements. This might sound intimidating, but all it means is that you’ll be assessing how your team currently does its work, and identifying what kind of data is most important to that work. You can do this by closely examining existing processes and by interviewing team members—both management and end users. Some questions to ask as you conduct your research:

How is your organization currently collecting data? Are you using spreadsheets? Paper templates? Another database? Whichever of these methods you’re using, find the most complete samples of work that you can, and look through them to find as many different attributes as you can. For example, your editorial calendar might currently be living in a spreadsheet, and have columns for “Author,” “Due Date,” “Editor,” and so on.
How is your organization currently presenting data? What kinds of reports does your organization use? PDFs? Slide decks? Web pages? Carefully examine any types of presentations that incorporate data from your current data collection methods and use them to identify potential fields.
How are your team members currently using data? The best way to determine the answers to this question is by talking to team members—both management and end users—to identify their current data use patterns and case studies, as well as any gaps in the current system. You can ask questions like, “What types of data are you currently using?” and have them review the samples you collected. Importantly, these interviews can also illuminate plans for the future growth of the organization, which will give you insight into future information requirements and the type of relational database model that would be the best fit.
Step 3: create a list of entities and a list of attributes
After settling on your organization’s purpose and objectives, and analyzing your data requirements, the next steps are to extract a list of entities and a list of attributes from the body of research you’ve compiled. In the context of relational databases, an entity is an object, person, place, event, or idea—like “clients,” “products,” “projects,” or “sales reps.” Attributes are the defining characteristics of those entities, like “name,” “quantity,” “address,” “phone number,” or “genre.” One way you can think about this is that entities are like nouns, and attributes are like the adjectives that describe those nouns.

Start by picking out entities from your research and putting them on a list. These entities will eventually serve as a guide to help you define your tables later on in the design process, but they will also help you identify the attributes necessary to create your list of fields. For example, if you were developing a talent database for a record label, your entities list might look something like this:

Artist
Agent
Venue
Gigs
etc.
Next, create a separate list containing the relevant attributes for each of the entities you’ve identified, as well as any dependencies the attributes might have on one another. These attributes will define the fields for your tables. Again, for the talent database example, your attributes list might look something like this:

Artist Name
Artist Phone Number
Agent Name
Agent Phone Number
Agent Email Address
Venue Name
Venue Address
Gig Dates
etc.
Once you’ve collected a preliminary list of attributes, you should go through and refine them to make sure that they accurately represent your organization’s informational needs.

### Tips:

If multiple attributes have different names but actually represent the same concept, deduplicate them so there’s only one. For example, if you have both “Product No.” and “Product Number” on your list, you should remove one of them.
If multiple attributes have similar names but actually represent different concepts, rename the attributes to be more specific. For example, you could rename two different “Name” attributes into the more specific “Artist Name” and “Venue Name.”
After refining your lists, it’s a good idea to review these lists that you’ve compiled with some of the team members you interviewed to confirm that you’ve accounted for every necessary type of data. Be sure to take their feedback into consideration and further refine your lists as appropriate.
### It will continue...