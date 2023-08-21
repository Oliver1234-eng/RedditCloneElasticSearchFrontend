Application for support viewing, posting and discussions (like Reddit). Technologies used: Angular (Spring Boot and Elastic search were used to create the back-end part). Functionalities related to part of Elastic search:
- while adding new community, that community can contain a PDF containing the description of the community
- while adding new post, that post can contain a PDF containing the text of the post
- search for communities by name, description, description from the attached PDF file, rule description, range of number of posts, average community karma or a combination of previous search parameters (BooleanQuery enabled for both AND and OR operators between fields)
- search posts by title, text, text from attached PDF file, text in comments, karma scope and combination of previous search parameters (BooleanQuery enabled for both AND and OR operators between fields), number of comments in range and flair

Notes:
All queries (searches) are pre-processed, they are case-independent, as well as Cyrillic and Latin letters.
PhraseQuery and FuzzyQuery input support is provided in some search fields.
