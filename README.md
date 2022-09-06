# project-blogging-Group37

Returns all blogs in the collection that aren't deleted and are published
Return the HTTP status 200 if any documents are found. The response structure should be like this
If no documents are found then return an HTTP status 404 with a response like this
Filter blogs list by applying filters. Query param can have any combination of below filters.
By author Id
By category
List of blogs that have a specific tag
List of blogs that have a specific subcategory example of a query url: blogs?filtername=filtervalue&f2=fv2