import DBWalker from "dbwalker";

export default async function handler(req, res) {
    try {
        const { method, query, body } = req
        const params = { ...query, ...body }
        const db = new DBWalker(process.env.DB_URL)

        if (method === "PUT") {
            return res.status(200).json({});
        } else if (method === "GET") {

            const tributation_params = {
                table: "tributations",
                where: [
                    ["deleted_at IS NULL"],
                ]

            }

            const tributation_sql = db.select(tributation_params).toString()
            const tributation_result = await db.query(tributation_sql)
            return res.status(200).json(tributation_result);
        } else if (method === "POST") {


            const uuid = await db.uuid();

            const payload = {
                uuid,
                ...body
            }

            const tributation_params = {
                table: "tributations",
                data: payload
            }

            const tributation_sql = db.insert(tributation_params).toString()
            const tributation_result = await db.query(tributation_sql)
            return res.status(201).json(tributation_result);
        } else if (method === "DELETE") {
            return res.status(204).json({});
        } else {
            throw new Error(`Method not allowed`);
        }

    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
}