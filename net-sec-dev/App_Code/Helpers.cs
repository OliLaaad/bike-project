namespace OliBase
{
    public static class Helpers
    {

        /// <summary>
        /// Check if node has Value
        /// </summary>
        /// <param name="node"></param>
        /// <returns></returns>
        public static bool HasValue(object node)
        {
            try
            {
                return (node != null && !string.IsNullOrEmpty(node.ToString()));

            }
            catch
            {

            }

            return false;


        }

    }




}