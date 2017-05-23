#!/bin/bash
#
echo "Expect a 200. Calling POST"
curl -i \
	-H "Content-Type: application/json" \
	-H "Accept: application/json" \
	-H "X-HTTP-METHOD-Override: PUT" \
	-X POST \
	-d '{
		"username":"xyz",
		"password":"xyz"
		}' \
	localhost:3000/api/v1/echo
echo ""
echo "-----------------------------------"
sleep 5
echo "Expect a 501. Calling GET"
curl -i -X GET localhost:3000/api/v1/echo
echo ""
echo "-----------------------------------"
sleep 5
echo "Expect a 501. Calling DEL"
curl -i -X DEL localhost:3000/api/v1/echo
echo ""
echo "-----------------------------------"
echo "Done"
