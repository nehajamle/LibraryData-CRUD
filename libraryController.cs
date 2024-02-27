using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using libraryWebApi.Models;
using System.Net.Http.Headers;

namespace libraryWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "X-My-Header")]
    public class libraryController : ApiController
    {
        //Get
        public HttpResponseMessage Get()
        {
            string query = @"select * from dbo.library1 ";

            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.
                ConnectionStrings["University"].ConnectionString))
            using (var cmd = new SqlCommand(query, conn))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        //Post
        public string Post(library lib)
        {
            try
            {
                string query = @"
                                insert into dbo.library1 values
                                (' " + lib.bookId + @" '
                                ,' " + lib.bookName + @" '
                                ,' " + lib.bookAuthor + @" '
                                ,' " + lib.issueBook + @" '
                                ,' " + lib.submitDate + @" '
                                ,' " + lib.studentName + @" '
                                )
                                ";
                DataTable table = new DataTable();
                using (var conn = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["University"].ConnectionString))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Sucessfully";
            }
            catch (Exception e)
            {
                return "Fail to Add!!" + e.Message;
            }
        }
        //Put
        public string Put(library lib)
        {
            try
            {
                string query = @"
                                update dbo.library1 set 
                                bookId=' " + lib.bookId + @" '
                                ,bookName=' " + lib.bookName + @"'
                                ,bookAuthor=' " + lib.bookAuthor + @" '
                                ,issueBook=' " + lib.issueBook + @" '
                                ,submitDate=' " + lib.submitDate + @" '
                                ,studentName=' " + lib.studentName + @" '
                                where bookId = " + lib.bookId + @"
                                ";

                DataTable table = new DataTable();
                using (var conn = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["University"].ConnectionString))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Sucessfully";
            }
            catch (Exception e)
            {
                return "Fail to Update!!" + e.Message;
            }
        }
        //Delete
        public string Delete(int id)
        {
            try
            {
                string query = @"
                                delete from dbo.library1
                                where bookId=" + id + @"
                                ";

                DataTable table = new DataTable();
                using (var conn = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["University"].ConnectionString))
                using (var cmd = new SqlCommand(query, conn))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Sucessfully Deleted";
            }
            catch (Exception e)
            {
                return "Fail to delete!!" + e.Message;
            }
        }

    }
}